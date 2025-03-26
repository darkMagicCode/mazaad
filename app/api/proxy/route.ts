import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const apiUrl = 'https://stagingapi.mazaady.com/api/v1/all-categories/web';

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'content-language': 'en', 
        'Accept': 'application/json',
        'private-key': 'Tg$LXgp7uK!D@aAj^aT3TmWY9a9u#qh5g&xgEETJ', 
        'platform': 'web', 
      },
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
