import Button from "@/components/button/button";
import CustomSelect from "@/components/form/select";
import Link from "next/link";
import add from "@/public/shared/icon-new-feedback.svg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className=" text-gray-dark before:content-['\003C'] before:mr-2 before:text-blue-dark cursor-pointer">
            Go Back
          </h2>
        </Link>
      </div>
      <form className="relative flex flex-col gap-4 bg-white p-4 pt-8 rounded-md mt-8">
        <Image src={add} alt="add" className=" absolute -top-8 left-4" />
        <h1>Create New Feedback</h1>
        <label htmlFor="title">
          <h4>Feedback Title</h4>
          Add a short, descriptive headline
        </label>
        <input
          type="text"
          name="title"
          className="bg-gray rounded-md p-4 w-full outline-none"
        />
        <label htmlFor="category">
          <h4>Category</h4>
          Choose a category for your feedback
        </label>
        <CustomSelect />
        <label htmlFor="description">
          <h4>Feedback Detail</h4>
          Include any specific comments on what should be improved, added, etc.
        </label>
        <textarea
          name="description"
          className=" bg-gray rounded-md p-4 w-full outline-none resize-none"
        />
        <div className="flex justify-end gap-4">
          <Button variant="black" disabled={false}>
            Cancel
          </Button>
          <Button variant="purple" disabled={false}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
