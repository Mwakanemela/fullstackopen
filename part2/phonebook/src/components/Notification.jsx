const Notification = ({ message }) => {
  if (!message.message) {
    return null;
  }

  return (
    <div className={message.messageType === "error" ? "error" : "success"}>
      {message.message}
    </div>
  )
}

export default Notification