import { NextResponse } from 'next/server';

const requiredFields = ['name', 'email', 'projectDetails'] as const;

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const missingFields = requiredFields.filter((field) => !body?.[field]);

    if (missingFields.length) {
      return NextResponse.json(
        { ok: false, message: 'Please complete all required fields.', missingFields },
        { status: 400 }
      );
    }

    if (!isValidEmail(String(body.email))) {
      return NextResponse.json(
        { ok: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const payload = {
      name: String(body.name),
      email: String(body.email),
      company: body.company ? String(body.company) : null,
      projectType: body.projectType ? String(body.projectType) : null,
      projectDetails: String(body.projectDetails),
      submittedAt: new Date().toISOString()
    };

    console.info('Novatelia contact submission:', payload);

    return NextResponse.json({
      ok: true,
      message: 'Thank you. Novatelia Studio has received your project inquiry.'
    });
  } catch (error) {
    console.error('Contact form submission failed:', error);

    return NextResponse.json(
      { ok: false, message: 'Unable to submit the form right now. Please try again later.' },
      { status: 500 }
    );
  }
}
