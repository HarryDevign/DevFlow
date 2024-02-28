import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How do I learn TypeScript?",
    questionToTags: [
      {
        questionId: "1",
        tagId: "101",
        tag: {
          id: "101",
          name: "TypeScript",
        },
      },
      {
        questionId: "1",
        tagId: "102",
        tag: {
          id: "102",
          name: "Programming",
        },
      },
    ],
    author: {
      _id: "user1",
      name: "John Doe",
      avatar: "avatar1.jpg",
    },
    upvotes: 10,
    views: 1000,
    answers: 5,
    createdAt: new Date("2023-02-27"),
  },
  {
    _id: "2",
    title: "What are the benefits of using React?",
    questionToTags: [
      {
        questionId: "2",
        tagId: "103",
        tag: {
          id: "103",
          name: "React",
        },
      },
      {
        questionId: "2",
        tagId: "102",
        tag: {
          id: "102",
          name: "Programming",
        },
      },
    ],
    author: {
      _id: "user2",
      name: "Jane Smith",
      avatar: "avatar2.jpg",
    },
    upvotes: 15,
    views: 120,
    answers: 8,
    createdAt: new Date("2024-02-28"),
  },
];


export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          placeholder="Search for questions..."
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex "
        />
      </div>
      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => {
            return (
              <QuestionCard
                key={question._id}
                _id={question._id}
                title={question.title}
                upvotes={question.upvotes}
                questionToTags={question.questionToTags}
                author={question.author}
                views={question.views}
                answers={question.answers}
                createdAt={question.createdAt}
              />
            );
          })
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
              discussion. our query could be the next big thing others learn from. Get
              involved! 💡"
            link="/ask-question"
            linkTitle="Ask a question"
          />
        )}
      </div>
    </>
  );
}
