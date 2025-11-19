This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Science Exhibition Certificates

Visit `http://localhost:3000/certificates` to view and download placeholder certificates for the GGSSS Begumpur School Science Exhibition.

Features:
- Teacher dropdown filter
- Search by student name, father's name, or event
- Download button linking to (placeholder) Google Drive certificate

Data Shape (placeholder):
```json
{
	"Teacher Name": [
		{
			"id": 1,
			"name": "Student Name",
			"fatherName": "Father's Name",
			"class": "VIII",
			"section": "A",
			"event": "Exhibit Title",
			"driveLink": "https://drive.google.com/...",
			"teacher": "Teacher Name"
		}
	]
}
```

To add real data later, replace the placeholder objects in `pages/api/certificates.js` with the actual teacher keys and student arrays. Maintain the same property names for seamless UI integration.

Optional filtering via API: `GET /api/certificates?teacher=Ms.%20Sharma` returns only one teacher's list.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
