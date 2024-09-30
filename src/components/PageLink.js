const PageLink = ({ itemClass, id, href, text }) => {
  return (
    <>
      <li key={id}>
        <a href={href} className={itemClass}>
          {text}
        </a>
      </li>
    </>
  );
};

export default PageLink;
