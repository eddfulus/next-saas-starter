import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
/* "use client"

import { useState } from "react"
import { addDays, format, isBefore, isAfter, isSameDay } from "date-fns"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, X } from "lucide-react"

// Mock function to simulate Vercel Blob upload
const uploadToBlob = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file))
    }, 1000)
  })
}

// Mock data for prices (in this example, prices for the next 60 days)
const generatePrices = () => {
  const prices = {}
  const today = new Date()
  for (let i = 0; i < 60; i++) {
    const date = addDays(today, i)
    prices[format(date, "yyyy-MM-dd")] = Math.floor(Math.random() * (200 - 50 + 1) + 50)
  }
  return prices
}

const prices = generatePrices()

export default function Component() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([new Date(), addDays(new Date(), 7)])
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  const getPrice = (date: Date | null) => {
    if (!date) return null
    const formattedDate = format(date, "yyyy-MM-dd")
    return prices[formattedDate]
  }

  const getTotalPrice = (range: [Date | null, Date | null]) => {
    if (!range[0] || !range[1]) return 0
    let total = 0
    let currentDate = range[0]
    while (isBefore(currentDate, range[1]) || isSameDay(currentDate, range[1])) {
      total += getPrice(currentDate) || 0
      currentDate = addDays(currentDate, 1)
    }
    return total
  }

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setIsUploading(true)
      try {
        const imageUrl = await uploadToBlob(file)
        setUploadedImage(imageUrl)
      } catch (error) {
        console.error("Error uploading image:", error)
      } finally {
        setIsUploading(false)
      }
    }
  }

  const removeUploadedImage = () => {
    setUploadedImage(null)
  }

  const renderDayContents = (day: number, date: Date) => {
    return (
      <div className="flex flex-col items-center">
        <span>{day}</span>
        <span className="text-xs text-muted-foreground">${getPrice(date)}</span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Select Date Range</CardTitle>
          <CardDescription>Choose your stay dates to see the total price</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <DatePicker
              selectsRange={true}
              startDate={dateRange[0]}
              endDate={dateRange[1]}
              onChange={(update) => setDateRange(update)}
              monthsShown={2}
              renderDayContents={renderDayContents}
              inline
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center" aria-live="polite">
            {dateRange[0] && dateRange[1] && (
              <div>
                <p className="text-lg font-semibold mb-2">
                  {format(dateRange[0], "MMMM d, yyyy")} - {format(dateRange[1], "MMMM d, yyyy")}
                </p>
                <p className="text-xl font-bold text-primary mb-4">
                  Total Price: ${getTotalPrice(dateRange)}
                </p>
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center">
              {uploadedImage ? (
                <div className="relative">
                  <img src={uploadedImage} alt="Uploaded" className="w-32 h-32 object-cover rounded-md" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-0 right-0 rounded-full"
                    onClick={removeUploadedImage}
                    aria-label="Remove uploaded image"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center">
                  <Upload className="h-8 w-8 text-gray-400" />
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUploading}
                className="hidden"
                id="image-upload"
              />
              <Button asChild disabled={isUploading}>
                <label htmlFor="image-upload" className="cursor-pointer">
                  {isUploading ? "Uploading..." : "Upload Image"}
                </label>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} */