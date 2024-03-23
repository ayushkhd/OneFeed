/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kxNmqgy7wEm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-14 px-4 border-b sm:h-16 md:px-6">
        <Link className="flex items-center gap-2 text-lg font-bold" href="#">
          OneFeed
        </Link>
        <nav className="ml-auto space-x-4 flex items-center text-sm font-medium md:space-x-6">
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Categories
          </Link>
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Profile
          </Link>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="grid md:grid-cols-[250px_1fr] items-start gap-4 md:gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <TwitterIcon className="w-4 h-4" />
              <h2 className="text-sm font-semibold">Tweets</h2>
            </div>
            <div className="flex items-center space-x-2">
              <InstagramIcon className="w-4 h-4" />
              <h2 className="text-sm font-semibold">Instagram Videos</h2>
            </div>
            <div className="flex items-center space-x-2">
              <YoutubeIcon className="w-4 h-4" />
              <h2 className="text-sm font-semibold">YouTube</h2>
            </div>
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Link className="font-medium hover:underline dark:underline-0" href="#">
                  My awesome tweet
                </Link>
              </div>
              <div className="grid gap-1.5 text-sm">
                <p className="truncate-3-lines">
                  This is my awesome tweet that everyone should read. I absolutely love the shadcn design library. It
                  makes creating beautiful UIs so much easier!
                </p>
                <div className="flex items-center gap-0.5">
                  <Button size="icon" variant="ghost">
                    <HeartIcon className="w-4 h-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="grid gap-1.5">
              <div className="flex items-center space-x-2">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                <Link className="font-medium hover:underline dark:underline-0" href="#">
                  My Instagram video
                </Link>
              </div>
              <div className="grid gap-1.5 text-sm">
                <p className="truncate-3-lines">Check out my awesome video! #shadcn #design #ui</p>
                <img
                  alt="Image"
                  className="aspect-video overflow-hidden rounded-lg object-cover object-center"
                  height={225}
                  src="/placeholder.svg"
                  width={400}
                />
                <div className="flex items-center gap-0.5">
                  <Button size="icon" variant="ghost">
                    <HeartIcon className="w-4 h-4" />
                    <span className="sr-only">Like</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MessageCircleIcon className="w-4 h-4" />
                    <span className="sr-only">Comment</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <SendIcon className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="flex items-center h-14 px-4 border-t justify-center sm:h-16 md:px-6">
        <nav className="space-x-4 flex items-center text-sm font-medium md:space-x-6">
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Home
          </Link>
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Categories
          </Link>
          <Link
            className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            Profile
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
