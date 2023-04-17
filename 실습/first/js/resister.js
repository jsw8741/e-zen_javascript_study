$(".btn_join").click(function () {
  const id = $("#id").val();
  const password = $("#pw").val();
  const password_ch = $("#pw_ch").val();
  const user_name = $("#user_name").val();
  const b_year = $("#year").val();
  const b_month = $("#month").val();
  const b_day = $("#day").val();
  const gender = $("#gender").val();
  const tel = $("#tel").val();

  console.log(b_month);
  if (!id) {
    alert("아이디를 입력해주세요.");
    return;
  } else if (!emailCheck(id)) {
    alert("올바르지 않은 이메일 형식입니다.!");
    return;
  } else if (!password) {
    alert("비밀번호를 입력해주세요.");
    return;
  } else if (!pwdCheck(password)) {
    alert(
      "비밀 번호가 특수문자 / 문자 / 숫자 포함 형태의 8~15자리가 아닙니다.!"
    );
    return;
  } else if (!password_ch) {
    alert("비밀번호를 재확인해주세요.");
    return;
  } else if (password !== password_ch) {
    alert("비밀번호가 다릅니다.");
    return;
  } else if (!user_name) {
    alert("이름을 입력해주세요.");
    return;
  } else if (!b_year) {
    alert("년도를 입력해주세요.");
    return;
  } else if (!b_month) {
    alert("월을 선택해주세요.");
    return;
  } else if (!b_day) {
    alert("일을 입력해주세요.");
    return;
  } else if (!gender) {
    alert("성별을 선택해주세요.");
    return;
  } else if (!tel) {
    alert("전화번호를 입력해주세요.");
    return;
  } else if (!telCheck(tel)) {
    alert("올바르지 않은 번호입니다.!");
    return;
  }

  alert("회원가입이 완료되었습니다!");
  location.href = "./index.html"; // 페이지 전환
});

// 정규식
function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd); // 맞으면 return true, 틀리면 false를 준다.
}

function emailCheck(email) {
  const reg = /^[a-z]+[a-z0-9]$/g;
  return reg.test(email); // 맞으면 return true, 틀리면 false를 준다.
}

//전화번호 정규식
function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}
