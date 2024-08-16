import Button from "@/components/button/button";
import CommentItem from "@/components/dashboard/comment-item";
import SuggestionItem from "@/components/dashboard/suggestion-item";
import { Divider } from "@mui/material";

import img1 from "@/public/user-images/image-anne.jpg";
import img2 from "@/public/user-images/image-elijah.jpg";
import img3 from "@/public/user-images/image-george.jpg";
import img4 from "@/public/user-images/image-roxanne.jpg";
import Link from "next/link";

const commentdata = [
  {
    username: "Elijah Moss",
    account: "@hexagon.bestagon",
    image: img1,
    comment:
      "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
    replies: [
      {
        username: "John",
        account: "@john",
        image: img2,
        comment:
          "I agree with John. This would be a great addition to the site.",
      },
    ],
  },
  {
    username: "James Skinner",
    account: "@hummingbird1",
    image: img3,
    comment: `@hummingbird1 While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.`,
    replies: [],
  },
  {
    username: "Anne",
    account: "@anne",
    image: img4,
    comment: "This is a great idea! I would love to see this implemented.",
    replies: [],
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className=" p-4 flex gap-4 flex-col overflow-y-scroll h-screen">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-2xl text-gray-dark before:content-['\003C'] before:mr-2 before:text-blue-dark cursor-pointer">
            Go Back
          </h2>
        </Link>
        <Link href="/edit">
          <Button variant="blue" disabled={false}>
            Edit Feedback
          </Button>
        </Link>
      </div>
      <SuggestionItem />
      <section className=" bg-white rounded-md flex flex-col p-4">
        <h2>Comments</h2>
        <div>
          {commentdata.map((comment, index) => (
            <div key={index}>
              <CommentItem
                username={comment.username}
                account={comment.account}
                comment={comment.comment}
                image={comment.image}
              />
              {comment.replies && comment.replies.length > 0 && (
                <div className="ml-4">
                  {comment.replies.map((reply, replyIndex) => (
                    <CommentItem
                      key={replyIndex}
                      username={reply.username}
                      account={reply.account}
                      comment={reply.comment}
                      image={reply.image}
                    />
                  ))}
                </div>
              )}
              {index !== commentdata.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white rounded-md p-4 flex flex-col gap-2">
        <h2>Add a comment</h2>
        <form>
          <textarea
            className="bg-gray rounded-md p-4 w-full outline-none resize-none"
            placeholder="Type your comment here"
          ></textarea>
        </form>
        <div className="flex justify-between">
          <p>250 Characters left</p>
          <Button variant="purple" disabled={false}>
            Post comment
          </Button>
        </div>
      </section>
    </div>
  );
}
