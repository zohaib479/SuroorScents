import Image from "next/image";
import pic1 from "../../public/images/pic1.jpg";
import pic2 from "../../public/images/pic2.jpg";

export default function Gallery() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Image src={pic1} alt="Fragrance 1" width={400} height={300} />
        <Image src={pic2} alt="Fragrance 2" width={400} height={300} />
      </div>
    </div>
  );
}
