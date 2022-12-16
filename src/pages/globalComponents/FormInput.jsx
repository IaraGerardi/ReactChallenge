import Icon from "./Icons";
import Select from "react-select";
import PropTypes from "prop-types";

function FormInput(props) {
  const { selectOptions } = props;
  const { errorMessage, onChange } = props;
  const { id, type, value, label, placeholder } = props;
  const { inputStyle, labelStyle, containerStyle, errorStyle } = props;

  const handleStyles = () => {
    const defaultStyle =
      "focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500";
    if (errorMessage)
      return `${inputStyle} ${defaultStyle} border border-solid border-red-600`;
    return `${inputStyle} ${defaultStyle}`;
  };

  return (
    <div className={`${containerStyle}`}>
      <label className={labelStyle} htmlFor={id}>
        {label} <span className="text-red-600">*</span>
      </label>
      {type === "select" ? (
        <Select
          placeholder={value}
          value={selectOptions.filter((obj) => obj.value === value)}
          options={selectOptions}
          onChange={onChange}
          styles={inputStyle}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={handleStyles()}
        />
      )}
      {errorMessage ? (
        <div className={`flex items-center ${errorStyle}`}>
          <Icon
            type="exclamationMark"
            iconStyle="w-3 h-3 mr-1 my-2 fill-red-600"
          />
          <span className="text-red-600 text-xs w-max">{errorMessage}</span>
        </div>
      ) : null}
    </div>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  containerStyle: PropTypes.string,
  errorStyle: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

export default FormInput;
