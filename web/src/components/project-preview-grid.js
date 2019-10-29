import { Link } from 'gatsby'
import React from 'react'
import ProjectPreview from './project-preview'
import styles from './project-preview-grid.module.css'
import { Carousel } from 'react-bootstrap'

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <Carousel>
          {props.nodes &&
            props.nodes.map(node => (
                <Carousel.Item key={node.id}>
                  <ProjectPreview {...node} />
                </Carousel.Item>
            ))}
      </Carousel>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProjectPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProjectPreviewGrid
