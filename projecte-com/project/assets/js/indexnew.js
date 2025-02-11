
const postsData = [
    {
        postId: 1,
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlz0Xg8c_qBJ1PJ2j3Qyo_gaNmHnPRqtJHmEIsj546LwLwLA9Qq6_Gd77-DPtXt392G8Q&usqp=CAU",
        title: "Mysterious New Dog Respiratory Illness Found in Several States",
        date: "Published on November 22, 2023",
        author: "Jenna Stregowski, RVT",
        excerpt: "Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...",
        likes: 20,
        comments: 6,
    },
    {
        postId: 2,
        imageSrc: "https://thedogretreat.com/wp-content/uploads/2022/05/AdobeStock_282473421-scaled.jpeg",
        title: "Shiba Inu Named 'Professor Akira' Learns Math Through Flashcards, Is Possibly a Doggie Genius",
        date: "Published on April 26, 2021",
        author: "Emily Schroeder",
        excerpt: "Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...",
        likes: 20,
        comments: 6,
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgh5oIER7Ia198vo39qFrlJ3C6lVR0Dviq0JkJc3Dsh7yYPTS6_NvRlrlG6q045BxsjBI&usqp=CAU",
        title: "Shiba Inu Named 'Professor Akira' Learns Math Through Flashcards, Is Possibly a Doggie Genius",
        date: "Published on April 26, 2021",
        author: "Emily Schroeder",
        excerpt: "Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...",
        likes: 20,
        comments: 6,
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53Wjd7ucTB3hU0KmdWYuqtJpCcGGMwrQzW7qtTNdQ4bA-Y1xHy61fd9lDxFLhHuRausM&usqp=CAU",
        title: "Shiba Inu Named 'Professor Akira' Learns Math Through Flashcards, Is Possibly a Doggie Genius",
        date: "Published on April 26, 2021",
        author: "Emily Schroeder",
        excerpt: "Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...",
        likes: 20,
        comments: 6,
    },
    {
        imageSrc: "https://thedogretreat.com/wp-content/uploads/2022/05/AdobeStock_282473421-scaled.jpeg",
        title: "Shiba Inu Named 'Professor Akira' Learns Math Through Flashcards, Is Possibly a Doggie Genius",
        date: "Published on April 26, 2021",
        author: "Emily Schroeder",
        excerpt: "Did you know that red-staining foods are excellent lymph-movers? In fact, many plants that were historically used as dyes...",
        likes: 20,
        comments: 6,
    },
    ];

    const postsPerPage = 4;
    const totalPosts = postsData.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    function showPosts(page) {
        const startIndex = (page - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        const postList = document.getElementById('post-list');
        postList.innerHTML = '';

        for (let i = startIndex; i < endIndex && i < totalPosts; i++) {
            const post = postsData[i];
            const postElem = document.createElement('li');
            postElem.classList.add('post-elem');

            const postItem = document.createElement('div');
            postItem.classList.add('post-item', 'style-left-info');

            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');

            const linkToPost = document.createElement('a');
            linkToPost.href = '#';
            linkToPost.classList.add('link-to-post');

            const image = document.createElement('img');
            image.src = post.imageSrc; // Replace 'imageSrc' with the actual property name in your post data
            image.width = 370;
            image.height = 270;
            image.alt = post.altText; // Replace 'altText' with the actual property name in your post data

            linkToPost.appendChild(image);
            thumbnail.appendChild(linkToPost);

            const postContent = document.createElement('div');
            postContent.classList.add('post-content');

            const postTitle = document.createElement('h4');
            const titleLink = document.createElement('a');
            titleLink.href = '#';
            titleLink.classList.add('linktopost');
            titleLink.textContent = post.title; // Replace 'title' with the actual property name in your post data
            postTitle.appendChild(titleLink);

            const postArchive = document.createElement('p');
            postArchive.classList.add('post-archive');
            postArchive.innerHTML = `<b class="post-cat">${post.category}</b><span class="post-date">  Published on ${post.publishedDate}</span><span class="author">Posted By: ${post.author}</span>`;

            const postExcerpt = document.createElement('p');
            postExcerpt.classList.add('excerpt');
            postExcerpt.textContent = post.excerpt; // Replace 'excerpt' with the actual property name in your post data

            const groupButtons = document.createElement('div');
            groupButtons.classList.add('group-buttons');

            const readMoreButton = document.createElement('a');
            readMoreButton.href = `aboutnew.html?id=${post.postId}`; // Update to your actual URL structure
            readMoreButton.classList.add('btn', 'readmore');
            readMoreButton.textContent = 'read more';

            const likeButton = document.createElement('a');
            likeButton.href = '#';
            likeButton.classList.add('btn', 'count-number', 'liked');
            likeButton.innerHTML = `<i class="biolife-icon icon-heart-1"></i><span class="number">${post.likes}</span>`;

            const commentButton = document.createElement('a');
            commentButton.href = '#';
            commentButton.classList.add('btn', 'count-number', 'commented');
            commentButton.innerHTML = `<i class="biolife-icon icon-conversation"></i><span class="number">${post.comments}</span>`;

            groupButtons.appendChild(readMoreButton);
            groupButtons.appendChild(likeButton);
            groupButtons.appendChild(commentButton);

            postContent.appendChild(postTitle);
            postContent.appendChild(postArchive);
            postContent.appendChild(postExcerpt);
            postContent.appendChild(groupButtons);

            postItem.appendChild(thumbnail);
            postItem.appendChild(postContent);

            postElem.appendChild(postItem);
            postList.appendChild(postElem);
        }
    }

    function showPagination() {
        const paginationList = document.getElementById('pagination-list');
        paginationList.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('li');
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;
            pageLink.classList.add('link-page');

            pageLink.addEventListener('click', function () {
                showPosts(i);
            });

            pageItem.appendChild(pageLink);
            paginationList.appendChild(pageItem);
        }
    }

    // Initial page load
    showPosts(1);
    showPagination();
