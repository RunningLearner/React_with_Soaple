import React, { Component } from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";

const reservedNotifications = [
  {
    message: "안녕하세요 오늘 일정을 알려드립니다.",
    id: 1,
  },
  {
    message: "점심시간입니다.",
    id: 2,
  },
  {
    message: "곧 미팅입니다.",
    id: 3,
  },
];

let timer;

class NotificationList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: [],
    };
  }

  componentDidMount() {
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications,
        });
      } else {
        this.setState({
          notifications: [],
        });
        clearInterval(timer);
      }
    }, 3000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              id={notification.id}
              message={notification.message}
            />
          );
        })}
      </div>
    );
  }
}

export default NotificationList;
