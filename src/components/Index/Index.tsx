import React from 'react';
import { NextPage } from 'next';

const Index: NextPage<IndexProps> = (props) => <div>{props.name}</div>;

export default Index;

Index.getInitialProps = () => ({
  name: 'test',
});

interface IndexProps {
  name: string;
}
