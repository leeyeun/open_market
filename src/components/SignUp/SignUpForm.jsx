import "./SignupForm.css";

function SignUpForm() {
  return (
    <section className="signUpSection">
      <form action="" className="signUpForm">
        <label htmlFor="userId" className="signUpLabel">
          아이디
        </label>
        <div>
          <input
            type="text"
            name="userId"
            id="userId"
            className="signUpInput id"
          />
          <button className="IdCheck">중복확인</button>
        </div>

        <label htmlFor="userpassword" className="signUpLabel">
          비밀번호
        </label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className="signUpInput password"
        />
        <label htmlFor="passwordCheck" className="signUpLabel">
          비밀번호 재확인
        </label>
        <input
          type="password"
          name="passwordCheck"
          id="passwordCheck"
          className="signUpInput passwordCheck"
        />
        <label htmlFor="userName" className="signUpLabel">
          이름
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="signUpInput name"
        />
        <label htmlFor="userPhone" className="signUpLabel">
          휴대폰번호
        </label>
        <input
          type="text"
          name="userPhone"
          id="userPhone"
          className="signUpInput phone"
        />
        <label htmlFor="userEmail" className="signUpLabel">
          이메일
        </label>
        <div>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            className="signUpInput email"
          />
          <span className="emailBug">@</span>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            className="signUpInput email"
          />
        </div>
      </form>
    </section>
  );
}
export default SignUpForm;
