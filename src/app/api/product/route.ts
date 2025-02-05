// app/api/products/route.ts
import { NextResponse } from 'next/server';
import { client } from '../../../sanity/lib/client';

export async function GET() {
  try {
    const query = `*[_type == "product"]{
      _id,
      title,
      description,
      price,
      image{
        asset->{
          _id,
          url
        }
      },
      inventory
    }`;

    const products = await client.fetch(query);
    return NextResponse.json(products); // Return the products as JSON
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}




