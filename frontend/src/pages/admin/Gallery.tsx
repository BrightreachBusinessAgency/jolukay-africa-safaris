import { useState, useEffect, useCallback, useRef } from 'react';
import API_URL from '../../services/api';
import { useToast } from '../../components/common/ToastContext';

interface GalleryImage {
  id: number;
  title: string | null;
  image: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

// Confirm this matches your Laravel store() validation rule.
// Use 'images[]' if the backend reads $request->file('images') as an array
// (PHP requires the [] suffix to collect multiple files under one field name).
// Use 'images' only if the backend explicitly expects a single non-array field.
const UPLOAD_FIELD_NAME = 'images[]';

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { showToast } = useToast();

  const getToken = () => localStorage.getItem('adminToken');

  // Central place to redirect on 401 so every request handles auth expiry the same way.
  const handleUnauthorized = useCallback(() => {
    localStorage.removeItem('adminToken');
    showToast('Your session has expired. Please log in again.', 'error');
    window.location.href = '/admin/login';
  }, [showToast]);

  // Thin wrapper around fetch that intercepts 401s before the caller sees them.
  const authFetch = useCallback(
    async (input: string, init: RequestInit = {}): Promise<Response> => {
      const res = await fetch(input, {
        ...init,
        headers: {
          ...(init.headers || {}),
          Authorization: `Bearer ${getToken()}`,
          Accept: 'application/json',
        },
      });

      if (res.status === 401) {
        handleUnauthorized();
        throw new Error('Unauthorized');
      }

      return res;
    },
    [handleUnauthorized]
  );

  const fetchImages = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await authFetch(`${API_URL}/admin/gallery`);

      if (!res.ok) {
        throw new Error('Failed to fetch gallery images');
      }

      // Backend returns a raw array, not { success, data }
      const json: GalleryImage[] = await res.json();
      setImages(Array.isArray(json) ? json : []);
    } catch (err) {
      if (err instanceof Error && err.message === 'Unauthorized') return;
      showToast(
        err instanceof Error ? err.message : 'Failed to load gallery images',
        'error'
      );
    } finally {
      setIsLoading(false);
    }
  }, [authFetch, showToast]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFilesSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);

    const formData = new FormData();
   Array.from(files).forEach((file) => {
  formData.append("images[]", file);
});

    try {
      const res = await authFetch(`${API_URL}/admin/gallery`, {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        let message = 'Upload failed';
        try {
          const errJson = await res.json();
          message =
            errJson?.message ||
            (errJson?.errors && Object.values(errJson.errors)[0]?.[0]) ||
            message;
        } catch {
          // response wasn't JSON — keep default message
        }
        throw new Error(message);
      }

      showToast('Image(s) uploaded successfully', 'success');
      await fetchImages();
    } catch (err) {
      if (err instanceof Error && err.message === 'Unauthorized') return;
      showToast(
        err instanceof Error ? err.message : 'Failed to upload images',
        'error'
      );
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDelete = async (id: number) => {
    setDeletingId(id);
    try {
      const res = await authFetch(`${API_URL}/admin/gallery/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        let message = 'Failed to delete image';
        try {
          const errJson = await res.json();
          message = errJson?.message || message;
        } catch {
          // ignore
        }
        throw new Error(message);
      }

      showToast('Image deleted successfully', 'success');
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      if (err instanceof Error && err.message === 'Unauthorized') return;
      showToast(
        err instanceof Error ? err.message : 'Failed to delete image',
        'error'
      );
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gallery</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage website gallery images
          </p>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFilesSelected}
          />
          <button
            type="button"
            onClick={handleUploadClick}
            disabled={isUploading}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            {isUploading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Uploading...
              </>
            ) : (
              'Upload Images'
            )}
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-20">
          <span className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : images.length === 0 ? (
        <div className="flex items-center justify-center py-20 border-2 border-dashed border-gray-200 rounded-xl">
          <p className="text-gray-500">No images uploaded yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gray-100">
                <img
                  src={img.image_url}
                  alt={img.title || 'Gallery image'}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-3">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {img.title || 'Untitled'}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {formatDate(img.created_at)}
                </p>
                <button
                  type="button"
                  onClick={() => handleDelete(img.id)}
                  disabled={deletingId === img.id}
                  className="mt-3 w-full text-sm font-medium text-red-600 hover:text-white hover:bg-red-600 border border-red-200 hover:border-red-600 disabled:opacity-50 rounded-lg py-1.5 transition-colors"
                >
                  {deletingId === img.id ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;