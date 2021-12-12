import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
    <h1>About Me</h1>
    <p>This i my website, yo!</p>
    <Link to="/">&larr; Back to home</Link>
    </Layout>
);