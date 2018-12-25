//Tạo Reducer để xử lý
var initialState = {
  by: "name",
  value: 1
};

var myReducer = (state = initialState, action) => {
  if (action.type === "SORT") {
    //Tránh trường hợp state cũ bị cập nhật nhưng giá trị mặc định bị thay đổi
    var { by, value } = action.sort; //by = action.sort.by;
    return {
      by: by,
      value: value
    };
  }
  return state;
};

export default myReducer;
