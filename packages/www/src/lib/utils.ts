import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertImageToBase64(image: File): Promise<string | undefined> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = () => {
      resolve(reader.result as string)
    }
    reader.onerror = (error) => {
      reject(error)
    }
  })
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))