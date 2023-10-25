import React from 'react';
import './chats.scss';

const Chats = () => {
  return (
    <div className="chat-container">
      <h1>HealthAI</h1>
      <section className="chat-conversation">
      </section>
      <form>
        <div className="chat-input">
          <textarea id="prompt" name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default Chats;
