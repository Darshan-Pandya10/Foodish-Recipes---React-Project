import '../App.css';

function Footer() {
  return (
    <div className="footer fixed bottom-0 w-screen h-24 p-8 text-center bg-black text-base md:tracking-widest">
      <p>
        project from{' '}
        <a target="_blank" href="https://www.chingu.io/">
          chingu
        </a>{' '}
        made by
        <a target="_blank" href="https://github.com/Darshan-Pandya10">
          {' '}
          Darshan Pandya
        </a>
        .
      </p>
    </div>
  );
}

export default Footer;
