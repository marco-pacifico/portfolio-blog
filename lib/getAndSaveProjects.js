import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Get file path to where blog posts are stored
// by joining path to root directory with pages/writing
const postsDirectory = path.join(process.cwd(), "pages/work");

// Function that returns a sorted array of objects
// where each object contains the frontmatter of a blog post
export function getSortedProjectsData() {
  // Get a list of folders in the pages/blog directory
  const folderNames = fs.readdirSync(postsDirectory);

  // Filer out any '.DS_Store' files
  const filteredFolderNames = folderNames.filter(
    (folderName) => folderName !== ".DS_Store" && folderName !== "index.js"
  );

  // Map over the list of filterdFolderNames to get
  // frontmatter of each .mdx file and returns as an array of objects
  const allProjectsData = filteredFolderNames.map((folderName) => {
    // Get the path to folder where the .mdx file is located
    const folderPath = path.join(postsDirectory, folderName);
    // Add .mdx to the folderName to get the filename with .mdx extension
    const fileName = folderName + '.mdx';
    // Get the path to the file by joining the folder path with the filename.mdx
    const filePath = path.join(folderPath, fileName);
    // Read .mdx file at the filePath as string
    const fileContents = fs.readFileSync(filePath, "utf8");
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Return frontmatter for each post as an object
    return {
      ...matterResult.data,
    };
  });

  // Sort the array of objects by date
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// // Define path to and name of the file that will be created 
// const staticFileDirectory = path.join(process.cwd(), 'public/data/POSTS.js');
// // Get array of objects with frontmatter of blog posts 
// const postData = getSortedPostsData();
// // Create a string representing the contents of the POSTS.js file 
// // such that a data object called POSTS that contains postsData is 
// // defined and exported
// const data = "const POSTS = " + JSON.stringify(postData) + "; export default POSTS;";
// // Use the writeFile method to create a new file POSTS.js
// // that's populated with contents stored in the data variable defined above
// fs.writeFile(staticFileDirectory, data ,(err) => err && console.error(err));

const staticFileDirectory = path.join(process.cwd(), '/data/PROJECTS.js');
const projectData = getSortedProjectsData();
const data = "const PROJECTS = " + JSON.stringify(projectData) + "; export default PROJECTS;";
fs.writeFile(staticFileDirectory, data ,(err) => err && console.error(err));