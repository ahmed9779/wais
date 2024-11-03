import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.json(); 
    console.log("Form Data Received:", formData);


    






    return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error("Error handling form data:", error);
    return NextResponse.json({ message: 'Failed to submit form' }, { status: 500 });
  }
}