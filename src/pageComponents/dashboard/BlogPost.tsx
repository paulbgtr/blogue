import Image from "next/image";
import Link from "next/link";

export const BlogPost = ({
  id,
  title,
  description,
  image_url,
}: {
  id: string;
  title: string;
  description: string;
  image_url?: string;
}) => {
  if (description.length > 50) {
    description = description.substring(0, 100) + "...";
  }

  return (
    <Link href={`/posts/${id}`}>
      <div className="w-full duration-200 shadow-xl h-72 hover:opacity-80 card bg-base-100 image-full">
        {image_url && (
          <figure>
            <Image src={image_url} alt={title} width={500} height={500} />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
};
