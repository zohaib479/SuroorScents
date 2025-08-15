export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <form className="flex flex-col gap-4 mt-6 w-full max-w-md">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2" />
        <button className="bg-black text-white py-2">Send</button>
      </form>
    </div>
  );
}