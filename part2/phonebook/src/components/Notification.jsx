const Notification = ({ message, messageType }) => {
  if (!message) {
    return null;
  }

  return (
    <div className={messageType === "error" ? "error" : "success"}>
      {message}
    </div>
  )
}

export default Notification