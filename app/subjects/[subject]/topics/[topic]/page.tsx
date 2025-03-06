"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { QuizEngine } from "@/components/quiz-engine"

// This would typically come from a database or API
const topicsData = {
  math: {
    counting: {
      title: "Counting & Numbers",
      description: "Learn to count and recognize numbers",
      subject: "Mathematics",
      subjectSlug: "math",
      subjectColor: "bg-math",
      level: "Beginner",
      ageRange: "3-5",
      questions: [
        {
          id: "math-count-1",
          question: "How many apples are there?",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
          explanation: "There are 4 apples in the image. Count them one by one: 1, 2, 3, 4.",
        },
        {
          id: "math-count-2",
          question: "What number comes after 5?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 2,
          explanation: "The number that comes after 5 is 6. The numbers in order are: 1, 2, 3, 4, 5, 6, 7...",
        },
        {
          id: "math-count-3",
          question: "What number is between 2 and 4?",
          options: ["1", "3", "5", "6"],
          correctAnswer: 1,
          explanation: "The number between 2 and 4 is 3. The numbers in order are: 1, 2, 3, 4, 5...",
        },
        {
          id: "math-count-4",
          question: "Count the dots: ● ● ● ●",
          options: ["2", "3", "4", "5"],
          correctAnswer: 2,
          explanation: "There are 4 dots. Count them one by one: 1, 2, 3, 4.",
        },
        {
          id: "math-count-5",
          question: "What number comes before 3?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 1,
          explanation: "The number that comes before 3 is 2. The numbers in order are: 1, 2, 3, 4...",
        },
      ],
    },
    addition: {
      title: "Addition",
      description: "Master the basics of adding numbers",
      subject: "Mathematics",
      subjectSlug: "math",
      subjectColor: "bg-math",
      level: "Beginner",
      ageRange: "5-7",
      questions: [
        {
          id: "math-add-1",
          question: "What is 2 + 3?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 1,
          explanation: "2 + 3 = 5. You can count up: 2, then 3 more: 3, 4, 5.",
        },
        {
          id: "math-add-2",
          question: "What is 4 + 2?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "4 + 2 = 6. You can count up: 4, then 2 more: 5, 6.",
        },
        {
          id: "math-add-3",
          question: "What is 1 + 5?",
          options: ["5", "6", "7", "8"],
          correctAnswer: 1,
          explanation: "1 + 5 = 6. You can count up: 1, then 5 more: 2, 3, 4, 5, 6.",
        },
        {
          id: "math-add-4",
          question: "What is 3 + 3?",
          options: ["3", "5", "6", "9"],
          correctAnswer: 2,
          explanation: "3 + 3 = 6. This is like adding 3 twice, or doubling 3.",
        },
        {
          id: "math-add-5",
          question: "What is 5 + 4?",
          options: ["8", "9", "10", "11"],
          correctAnswer: 1,
          explanation: "5 + 4 = 9. You can count up: 5, then 4 more: 6, 7, 8, 9.",
        },
      ],
    },
  },
  science: {
    animals: {
      title: "Animals & Habitats",
      description: "Learn about different animals and where they live",
      subject: "Science",
      subjectSlug: "science",
      subjectColor: "bg-science",
      level: "Beginner",
      ageRange: "3-6",
      questions: [
        {
          id: "science-animals-1",
          question: "Where do fish live?",
          options: ["Desert", "Forest", "Water", "Mountains"],
          correctAnswer: 2,
          explanation: "Fish live in water. They have gills that allow them to breathe underwater.",
        },
        {
          id: "science-animals-2",
          question: "Which animal has a trunk?",
          options: ["Lion", "Elephant", "Giraffe", "Zebra"],
          correctAnswer: 1,
          explanation: "Elephants have trunks, which they use for breathing, lifting objects, and getting water.",
        },
        {
          id: "science-animals-3",
          question: "Which animal can fly?",
          options: ["Fish", "Bird", "Snake", "Frog"],
          correctAnswer: 1,
          explanation: "Birds have wings that allow them to fly through the air.",
        },
        {
          id: "science-animals-4",
          question: "Where do polar bears live?",
          options: ["Desert", "Jungle", "Arctic", "Ocean"],
          correctAnswer: 2,
          explanation: "Polar bears live in the Arctic, where it's very cold and there's lots of ice and snow.",
        },
        {
          id: "science-animals-5",
          question: "Which animal has a shell?",
          options: ["Dog", "Cat", "Turtle", "Rabbit"],
          correctAnswer: 2,
          explanation: "Turtles have shells that protect their bodies. The shell is like a home they carry with them.",
        },
      ],
    },
  },
  reading: {
    alphabet: {
      title: "Alphabet Recognition",
      description: "Learn letters and their sounds",
      subject: "Reading",
      subjectSlug: "reading",
      subjectColor: "bg-reading",
      level: "Beginner",
      ageRange: "3-5",
      questions: [
        {
          id: "reading-alphabet-1",
          question: "Which letter makes the 'buh' sound?",
          options: ["A", "B", "C", "D"],
          correctAnswer: 1,
          explanation: "The letter B makes the 'buh' sound, as in 'ball' or 'boy'.",
        },
        {
          id: "reading-alphabet-2",
          question: "Which letter comes after A in the alphabet?",
          options: ["Z", "B", "C", "D"],
          correctAnswer: 1,
          explanation: "B comes after A in the alphabet. The first few letters are: A, B, C, D...",
        },
        {
          id: "reading-alphabet-3",
          question: "Which letter makes the 'sss' sound?",
          options: ["S", "T", "U", "V"],
          correctAnswer: 0,
          explanation: "The letter S makes the 'sss' sound, as in 'snake' or 'sun'.",
        },
        {
          id: "reading-alphabet-4",
          question: "Which word starts with the letter M?",
          options: ["Dog", "Cat", "Mouse", "Fish"],
          correctAnswer: 2,
          explanation: "Mouse starts with the letter M. You can hear the 'mmm' sound at the beginning.",
        },
        {
          id: "reading-alphabet-5",
          question: "How many letters are in the alphabet?",
          options: ["20", "24", "26", "30"],
          correctAnswer: 2,
          explanation: "There are 26 letters in the English alphabet, from A to Z.",
        },
      ],
    },
  },
  coding: {
    basics: {
      title: "Coding Basics",
      description: "Introduction to coding concepts",
      subject: "Coding",
      subjectSlug: "coding",
      subjectColor: "bg-coding",
      level: "Beginner",
      ageRange: "5-7",
      questions: [
        {
          id: "coding-basics-1",
          question: "What is an algorithm?",
          options: ["A type of computer", "A step-by-step set of instructions", "A computer game", "A type of robot"],
          correctAnswer: 1,
          explanation: "An algorithm is a step-by-step set of instructions that tells a computer what to do.",
        },
        {
          id: "coding-basics-2",
          question: "Which of these is a coding direction?",
          options: ["Jump", "Run", "Move forward", "Dance"],
          correctAnswer: 2,
          explanation: "'Move forward' is a coding direction that tells a character or object which way to go.",
        },
        {
          id: "coding-basics-3",
          question: "What happens if you give a computer the wrong instructions?",
          options: [
            "It will fix them for you",
            "It will do what you told it to do, even if it's wrong",
            "It will get angry",
            "Nothing will happen",
          ],
          correctAnswer: 1,
          explanation:
            "Computers follow instructions exactly as given. If the instructions are wrong, the computer will still follow them, which might cause errors.",
        },
        {
          id: "coding-basics-4",
          question: "What is a bug in coding?",
          options: [
            "A small insect in the computer",
            "A mistake in the code",
            "A special coding tool",
            "A type of computer",
          ],
          correctAnswer: 1,
          explanation: "A bug is a mistake or error in the code that causes the program not to work as expected.",
        },
        {
          id: "coding-basics-5",
          question: "What is the first step in solving a coding problem?",
          options: [
            "Write the code immediately",
            "Ask someone else to do it",
            "Understand the problem",
            "Test the solution",
          ],
          correctAnswer: 2,
          explanation:
            "The first step in solving any coding problem is to understand what the problem is asking you to do.",
        },
      ],
    },
  },
}

export default function TopicPage({ params }: { params: { subject: string; topic: string } }) {
  const { subject, topic } = params
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if the subject and topic exist in our data
  if (
    mounted &&
    (!topicsData[subject as keyof typeof topicsData] || !topicsData[subject as keyof typeof topicsData][topic as any])
  ) {
    notFound()
  }

  if (!mounted) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
    )
  }

  const topicData = topicsData[subject as keyof typeof topicsData][topic as any]

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-8">
        <Link
          href={`/subjects/${subject}`}
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to {topicData.subject}
        </Link>

        <div className="relative overflow-hidden rounded-xl bg-secondary/30 border border-secondary p-8 mb-12">
          <div className="absolute inset-0 pattern-dots opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${topicData.subjectColor} text-white`}>
                {topicData.level}
              </div>
              <div className="text-xs text-muted-foreground">Ages {topicData.ageRange}</div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{topicData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">{topicData.description}</p>
          </div>
        </div>

        <QuizEngine
          questions={topicData.questions}
          subjectColor={topicData.subjectColor}
          onComplete={(score, total) => {
            console.log(`Quiz completed with score ${score}/${total}`)
            // Here you would typically save the progress to a database
          }}
        />
      </div>
    </div>
  )
}
