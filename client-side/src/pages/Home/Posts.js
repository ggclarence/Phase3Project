
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./PostCard";
import '../styles.css'

function Posts({ currentPost }) { 

    
    
    const mapPost = currentPost.map((post) => {
        return <PostCard key={post.id} post={post} /> 
    })

    return (
            <div id='scrollableDiv'>
                <InfiniteScroll 
                    dataLength={currentPost.length}
                    style={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: "center",
                    }}
                    inverse={true}
                    hasMore={false}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                    >
                    {mapPost}
                </InfiniteScroll>
            </div>
    )
}

export default Posts;