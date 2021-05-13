import React from 'react'
import Keyword from './Keyword'
import ExamplesTable from './ExamplesTable'
import * as messages from '@cucumber/messages'
import Tags from './Tags'
import Description from './Description'

interface IExamplesProps {
  examples: messages.Examples
}

const Examples: React.FunctionComponent<IExamplesProps> = ({ examples }) => {
  return (
    <section className="cucumber-examples">
      <Tags tags={examples.tags} />
      <h2 className="cucumber-title">
        <Keyword>{examples.keyword}:</Keyword>{' '}
        <span className="cucumber-title__text">{examples.name}</span>
      </h2>
      <Description description={examples.description} />
      {examples.tableHeader && (
        <ExamplesTable tableHeader={examples.tableHeader} tableBody={examples.tableBody} />
      )}
    </section>
  )
}

export default Examples
