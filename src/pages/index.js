import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-post';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';

export default () => {
    const posts = usePosts();
    return (
    <>
    <Hero />
    <Layout>
        <h2>Read my Blog!</h2>
        {posts.map(post => (
            <PostPreview key={post.slug} post={post}/> 
        ))}
    </Layout>
    </>
    );
};