import * as messages from '@cucumber/messages'
import {
  faCheckCircle,
  faInfoCircle,
  faPauseCircle,
  faQuestionCircle,
  faStopCircle,
  faTimesCircle,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import {
  DefaultComponent,
  StatusIconClasses,
  StatusIconProps,
  useCustomRendering,
} from '../customise'
import defaultStyles from './StatusIcon.module.scss'

const DefaultRenderer: DefaultComponent<StatusIconProps, StatusIconClasses> = ({
  status,
  styles,
}) => {
  return (
    <FontAwesomeIcon
      icon={statusIcon(status)}
      size="1x"
      className={styles.icon}
      data-status={status}
    />
  )
}

export const StatusIcon: React.FunctionComponent<StatusIconProps> = (props) => {
  const Customised = useCustomRendering<StatusIconProps, StatusIconClasses>(
    'StatusIcon',
    defaultStyles,
    DefaultRenderer
  )
  return <Customised {...props}>{props.children}</Customised>
}

const statusIcon = (status: messages.TestStepResultStatus): IconDefinition => {
  return {
    ['PASSED']: faCheckCircle,
    ['SKIPPED']: faStopCircle,
    ['PENDING']: faPauseCircle,
    ['UNDEFINED']: faQuestionCircle,
    ['AMBIGUOUS']: faInfoCircle,
    ['FAILED']: faTimesCircle,
    ['UNKNOWN']: faQuestionCircle,
  }[status]
}
