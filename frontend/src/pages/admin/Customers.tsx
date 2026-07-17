export default function CustomerInquiries() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Customer Inquiries
        </h1>

        <p className="mt-2 text-slate-600">
          View and manage customer contact messages.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-10 shadow">
        <p className="text-slate-500">
          No customer inquiries yet.
        </p>
      </div>
    </>
  );
}