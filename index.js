

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "avatar-vangogh.jpg",
        post: "post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "avatar-courbet.jpg",
        post: "post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "avatar-ducreux.jpg",
        post: "post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const feedEL = document.getElementById("feed")

function renderPosts() {
    let postFeed = ""

    for (let i = 0; i < posts.length; i++){

        postFeed += 
            `
                    <article>
                        <header class="post-header">
                            <img class="avatar" alt="poster avatar" src="${posts[i].avatar}">
                            <div>
                                <h1 class="name">${posts[i].name}</h1>
                                <p class="location">${posts[i].location}</p>
                            </div>
                        </header>

                        <img class="post" alt="self-portrait of artist" src="${posts[i].post}">
            
                        <nav class="post-actions" aria-label="Post actions">
                            <ul>
                                <li>
                                    <img class="icon like-btn" role="button" aria-pressed="false" tabindex="0" alt="Like" src="icon-heart.png">
                                </li>
                                <li>
                                    <img class="icon" alt="Comment" src="icon-comment.png">
                                </li>
                                <li>
                                    <img class="icon" alt="Share" src="icon-dm.png">
                                </li>
                            </ul>
                        </nav>

                        <h2 class="likes" data-likes="${posts[i].likes}">${posts[i].likes} likes</h2>
                        <p class="comment"><span class="username">${posts[i].username}</span> ${posts[i].comment}</p> 
                    </article>
    
            `
        }
    feedEL.innerHTML = postFeed    
}

renderPosts()

document.getElementById("feed").addEventListener("click", function(e) {
    const btn = e.target.closest(".like-btn")
    if (!btn) return

    const post = btn.closest("article")
    const likesEl = post.querySelector(".likes")

    let likes = Number(likesEl.dataset.likes)
    let isLiked = btn.classList.contains("liked")

    if(!isLiked) {
        likes++
        btn.classList.add("liked")
        btn.setAttribute("aria-pressed", "true")
    } else {
        likes--
        btn.classList.remove("liked")
        btn.setAttribute("aria-pressed", "false")
    }

    likesEl.dataset.likes = likes
    likesEl.textContent = `${likes} likes`
})



