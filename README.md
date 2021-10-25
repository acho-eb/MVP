<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  
  ![eorzea]

  <p align="center">
    MVP
    <br />
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#Contact">App Components</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

I made a wikipedia visualizer for the online game: Final Fantasy XIV. I used React and React Router to allow seamless traversal through 21 different pages. Styling was done with pure HTML, CSS, and CSS grid.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AndrewGunnCho/MVP.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run server
   ```sh
   npm run start
   ```


<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

The image in the "Jobs" page will have clickable icons loaded on top of them. Clicking on them will navigate the page to the specific job.

![job]

The input fields in the "Creation" page will allow for users to check if their desired username is available in the server selected.

![creation]

<p align="right">(<a href="#top">back to top</a>)</p>




## App Components


### [Book Viewer and Narrator](client/components/player)

- Developed by [Justin Beere](https://www.linkedin.com/in/justin-beere/), [Kevin Gao](https://www.linkedin.com/in/kevinzhugao/), [Lenora Esquenazi](https://www.linkedin.com/in/lenora-esquenazi/), [Matthew Boyle](https://www.linkedin.com/in/matthewboyle1989/)
- Allows users to read an EPUB book along with a narration of the text. Users can change text size, speed, pitch, voice and choose to listen to a fireplace background if they so choose. 

### [Book Player Research Engineer](client/components/player)

- Developed by [Daniel Ho](https://www.linkedin.com/in/dho1994/)
- Researched and managed which technology to use and implemented those tools within the Book Viewer.

### [Library and Voice Recognition](client/components/library)

- Developed by [Huong Nguyen](https://www.linkedin.com/in/huong-tran-nguyen/)
- Library page displays a list of EPUB books available in the app. The "My Account" page displays a user-specific list of EPUB books separated into 2 sections: "Reading Now" and "My Books". Users can search and sort through the books, as well as upload a personal EPUB or add an EPUB book from the library to their account. Users can also play a book, remove a book from the "Reading Now" section, and delete a book from their account.
- Users can use voice control to interact with the library and the book player by simply clicking on the microphone button to speak commands (please refer to the [voice command list](https://github.com/rfp55-blue-ocean-blastoise/Blue-Ocean-Blastoise/blob/main/Voice-Control.md))

### [Backend Architecture](server), [Database](database) and [Authentication](client/components)

- Developed by [Aaron Tran](https://www.linkedin.com/in/aaronltran/) and [Andrew Cho](https://www.linkedin.com/in/andrewgunncho/)
- We chose MongoDB to represent each document as a user with their own personal array of books and each book object will have a bookmark and the link to the EPUB file. The EPUB files are hosted in Amazon S3 on upload.
- For authentication, we used Firebase to handle the  user credentials alongside React Context to update the current user's MongoDB document on update. Firebase methods are also used for session persistence to enable a logged-in state.





<p align="right">(<a href="#top">back to top</a>)</p>

## Contact

Andrew Cho: [![Linkedin: LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white&link=https://www.linkedin.com/in/andrew-cho-b06768218/)](https://www.linkedin.com/in/andrew-cho-b06768218/) [![GitHub: GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white&link=https://github.com/AndrewGunnCho)](https://github.com/AndrewGunnCho)


Project Link: [https://github.com/AndrewGunnCho/MVP](https://github.com/AndrewGunnCho/MVP)

## Acknowledgments

* XIVAPI


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- Images -->

[eorzea]: images/eorzea.png
[job]: images/job.png
[creation]: images/creation.png
