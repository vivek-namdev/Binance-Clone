export default function LoadingWrap() {
  return (
    <div className="px-2 py-2 bg-paper_lighter rounded">
      <div className="flex flex-row justify-center content-center">
        <a className="text-secondary_main" href="">Login</a>
        <span className="text-text_primary mx-1">or</span>
        <a className="text-secondary_main" href="">Register</a>
      </div>
    </div>
  );
}