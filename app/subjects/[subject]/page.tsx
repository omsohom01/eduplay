import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, BookOpen, Code, FlaskRoundIcon as Flask, Calculator } from "lucide-react"

// This would typically come from a database or API
const subjectsData = {
  math: {
    title: "Mathematics",
    description: "Develop strong math skills through interactive games and puzzles",
    longDescription:
      "Our mathematics curriculum is designed to make numbers fun and engaging. Through interactive games, puzzles, and activities, children develop strong foundational math skills while enjoying the learning process.",
    icon: Calculator,
    color: "text-math",
    bgColor: "bg-math/10",
    buttonColor: "bg-math",
    gradientText: "from-math to-blue-400",
    topics: [
      {
        id: "counting",
        title: "Counting & Numbers",
        description: "Learn to count and recognize numbers",
        level: "Beginner",
        ageRange: "3-5",
        questionsCount: 10,
      },
      {
        id: "addition",
        title: "Addition",
        description: "Master the basics of adding numbers",
        level: "Beginner",
        ageRange: "5-7",
        questionsCount: 15,
      },
      {
        id: "subtraction",
        title: "Subtraction",
        description: "Learn how to subtract numbers",
        level: "Beginner",
        ageRange: "5-7",
        questionsCount: 15,
      },
      {
        id: "multiplication",
        title: "Multiplication",
        description: "Multiply numbers and learn times tables",
        level: "Intermediate",
        ageRange: "7-9",
        questionsCount: 20,
      },
      {
        id: "division",
        title: "Division",
        description: "Understand division concepts",
        level: "Intermediate",
        ageRange: "7-9",
        questionsCount: 20,
      },
      {
        id: "fractions",
        title: "Fractions",
        description: "Learn about parts of a whole",
        level: "Intermediate",
        ageRange: "8-10",
        questionsCount: 15,
      },
      {
        id: "geometry",
        title: "Geometry",
        description: "Explore shapes and spatial relationships",
        level: "Advanced",
        ageRange: "9-12",
        questionsCount: 15,
      },
      {
        id: "algebra",
        title: "Algebra Basics",
        description: "Introduction to algebraic concepts",
        level: "Advanced",
        ageRange: "10-12",
        questionsCount: 10,
      },
    ],
  },
  science: {
    title: "Science",
    description: "Explore the natural world through experiments and discoveries",
    longDescription:
      "Our science curriculum encourages curiosity and exploration. Through interactive simulations and engaging activities, children learn about the natural world and develop scientific thinking skills.",
    icon: Flask,
    color: "text-science",
    bgColor: "bg-science/10",
    buttonColor: "bg-science",
    gradientText: "from-science to-green-400",
    topics: [
      {
        id: "animals",
        title: "Animals & Habitats",
        description: "Learn about different animals and where they live",
        level: "Beginner",
        ageRange: "3-6",
        questionsCount: 10,
      },
      {
        id: "plants",
        title: "Plants & Growth",
        description: "Discover how plants grow and thrive",
        level: "Beginner",
        ageRange: "5-8",
        questionsCount: 12,
      },
      {
        id: "weather",
        title: "Weather & Seasons",
        description: "Explore different weather patterns and seasons",
        level: "Beginner",
        ageRange: "6-9",
        questionsCount: 15,
      },
      {
        id: "solar-system",
        title: "Solar System",
        description: "Learn about planets and space",
        level: "Intermediate",
        ageRange: "7-10",
        questionsCount: 15,
      },
      {
        id: "simple-machines",
        title: "Simple Machines",
        description: "Discover levers, pulleys, and other simple machines",
        level: "Intermediate",
        ageRange: "8-12",
        questionsCount: 12,
      },
      {
        id: "human-body",
        title: "Human Body",
        description: "Learn about body systems and how they work",
        level: "Intermediate",
        ageRange: "8-12",
        questionsCount: 15,
      },
      {
        id: "chemistry",
        title: "Chemistry Basics",
        description: "Introduction to basic chemistry concepts",
        level: "Advanced",
        ageRange: "9-12",
        questionsCount: 10,
      },
      {
        id: "ecosystems",
        title: "Ecosystems",
        description: "Understand how living things interact with their environment",
        level: "Advanced",
        ageRange: "9-12",
        questionsCount: 12,
      },
    ],
  },
  reading: {
    title: "Reading",
    description: "Build literacy skills through interactive stories and activities",
    longDescription:
      "Our reading curriculum helps children develop strong literacy skills through interactive activities, phonics games, and vocabulary-building exercises. Children progress from letter recognition to reading comprehension at their own pace.",
    icon: BookOpen,
    color: "text-reading",
    bgColor: "bg-reading/10",
    buttonColor: "bg-reading",
    gradientText: "from-reading to-pink-400",
    topics: [
      {
        id: "alphabet",
        title: "Alphabet Recognition",
        description: "Learn letters and their sounds",
        level: "Beginner",
        ageRange: "3-5",
        questionsCount: 10,
      },
      {
        id: "phonics",
        title: "Phonics",
        description: "Connect letters with their sounds",
        level: "Beginner",
        ageRange: "4-6",
        questionsCount: 15,
      },
      {
        id: "sight-words",
        title: "Sight Words",
        description: "Learn common words by sight",
        level: "Beginner",
        ageRange: "5-7",
        questionsCount: 20,
      },
      {
        id: "vocabulary",
        title: "Vocabulary Building",
        description: "Expand your word knowledge",
        level: "Intermediate",
        ageRange: "6-9",
        questionsCount: 15,
      },
      {
        id: "comprehension",
        title: "Reading Comprehension",
        description: "Understand what you read",
        level: "Intermediate",
        ageRange: "7-10",
        questionsCount: 10,
      },
      {
        id: "grammar",
        title: "Grammar Basics",
        description: "Learn the rules of language",
        level: "Intermediate",
        ageRange: "8-10",
        questionsCount: 15,
      },
      {
        id: "writing",
        title: "Creative Writing",
        description: "Express yourself through stories",
        level: "Advanced",
        ageRange: "9-12",
        questionsCount: 8,
      },
      {
        id: "poetry",
        title: "Poetry",
        description: "Explore rhythm and expression in language",
        level: "Advanced",
        ageRange: "10-12",
        questionsCount: 10,
      },
    ],
  },
  coding: {
    title: "Coding",
    description: "Learn programming concepts through fun, interactive challenges",
    longDescription:
      "Our coding curriculum introduces children to programming concepts through visual activities. Children develop computational thinking skills while creating animations, games, and solving puzzles.",
    icon: Code,
    color: "text-coding",
    bgColor: "bg-coding/10",
    buttonColor: "bg-coding",
    gradientText: "from-coding to-yellow-400",
    topics: [
      {
        id: "basics",
        title: "Coding Basics",
        description: "Introduction to coding concepts",
        level: "Beginner",
        ageRange: "5-7",
        questionsCount: 10,
      },
      {
        id: "sequences",
        title: "Sequences",
        description: "Learn about sequences and algorithms",
        level: "Beginner",
        ageRange: "6-8",
        questionsCount: 12,
      },
      {
        id: "loops",
        title: "Loops",
        description: "Discover how loops work in programming",
        level: "Intermediate",
        ageRange: "7-9",
        questionsCount: 15,
      },
      {
        id: "conditionals",
        title: "Conditionals",
        description: "Learn about if-then statements and logic",
        level: "Intermediate",
        ageRange: "8-10",
        questionsCount: 15,
      },
      {
        id: "functions",
        title: "Functions",
        description: "Create and use functions in your code",
        level: "Advanced",
        ageRange: "9-11",
        questionsCount: 12,
      },
      {
        id: "variables",
        title: "Variables",
        description: "Store and use data in your programs",
        level: "Advanced",
        ageRange: "9-11",
        questionsCount: 15,
      },
      {
        id: "debugging",
        title: "Debugging",
        description: "Find and fix errors in code",
        level: "Advanced",
        ageRange: "10-12",
        questionsCount: 10,
      },
      {
        id: "game-design",
        title: "Game Design",
        description: "Build your own simple games with code",
        level: "Advanced",
        ageRange: "10-12",
        questionsCount: 8,
      },
    ],
  },
}

export default function SubjectPage({ params }: { params: { subject: string } }) {
  const subject = params.subject

  // Check if the subject exists in our data
  if (!subjectsData[subject as keyof typeof subjectsData]) {
    notFound()
  }

  const subjectData = subjectsData[subject as keyof typeof subjectsData]
  const SubjectIcon = subjectData.icon

  return (
    <div className="container py-12 md:py-20">
      <div className="mb-8">
        <Link
          href="/subjects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Subjects
        </Link>

        <div className="relative overflow-hidden rounded-xl bg-secondary/30 border border-secondary p-8 mb-12">
          <div className="absolute inset-0 pattern-diagonal opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className={`w-20 h-20 rounded-full ${subjectData.bgColor} flex items-center justify-center shrink-0`}>
              <SubjectIcon className={`h-10 w-10 ${subjectData.color}`} />
            </div>
            <div>
              <h1 className={`text-3xl md:text-4xl font-bold mb-4 gradient-text ${subjectData.gradientText}`}>
                {subjectData.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">{subjectData.longDescription}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold">Learning Topics</h2>
              <p className="text-muted-foreground">Choose a topic to start learning and test your knowledge</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Beginner</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span>Advanced</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectData.topics.map((topic) => {
              const levelColor =
                topic.level === "Beginner"
                  ? "bg-green-500"
                  : topic.level === "Intermediate"
                    ? "bg-yellow-500"
                    : "bg-red-500"

              return (
                <Link key={topic.id} href={`/subjects/${subject}/topics/${topic.id}`} className="group">
                  <div className="relative overflow-hidden rounded-xl bg-secondary/30 border border-secondary hover:border-primary/50 p-6 h-full transition-all duration-300">
                    <div className="absolute -inset-px bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 rounded-xl transition-all duration-300"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{topic.title}</h3>
                        <div className={`w-2.5 h-2.5 rounded-full ${levelColor} mt-2`}></div>
                      </div>
                      <p className="text-muted-foreground mb-4">{topic.description}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <div>Ages {topic.ageRange}</div>
                        <div>{topic.questionsCount} questions</div>
                      </div>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Start Learning</span>
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
