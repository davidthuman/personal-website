import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "lib", "public-content", "posts")

export function getSortedPostsData() {
    // Get files names under /lib/content
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map( (fileName) => {
        // remove all ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read Markdown files as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const content = matterResult.content;

        // Combine the id, with metadata and content
        return {
            id,
            ...matterResult.data,
            content,
        };
    });
    // Sort posts by date
    return allPostsData.sort( (a,b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getPost(id) {
    // Read Markdown files as string
    const fullPath = path.join(postsDirectory, id.concat(".md"));
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const content = matterResult.content;

    // Combine the id, with metadata and content
    return {
        id,
        ...matterResult.data,
        content,
    };
}