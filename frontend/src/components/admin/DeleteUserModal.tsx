interface Props {
  open: boolean;
  loading?: boolean;
  userName?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteUserModal({
  open,
  loading = false,
  userName,
  onClose,
  onConfirm,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">

        <div className="text-center">

          <div className="mx-auto w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-4xl">
            🗑
          </div>

          <h2 className="text-2xl font-bold mt-5">
            Delete User
          </h2>

          <p className="text-gray-500 mt-3">
            Are you sure you want to permanently delete
            <br />

            <span className="font-semibold text-red-600">
              {userName}
            </span>

            ?
          </p>

        </div>

        <div className="flex justify-end gap-4 mt-8">

          <button
            onClick={onClose}
            disabled={loading}
            className="px-6 py-3 rounded-xl border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}