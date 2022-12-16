import React from "react";
import PropTypes from "prop-types";
import Icon from "../../globalComponents/Icons";

function CTABox(props) {
  const { ctaIcon, mainBoxIcon } = props;
  const { title, subtitle, callToAction, redirectPage } = props;
  const {
    mainBoxStyle,
    titleStyle,
    subtitleStyle,
    CTAStyle,
    ctaIconStyle,
    mainIconStyle,
  } = props;

  return (
    <div className={mainBoxStyle}>
      <div>
        <h1 className={titleStyle}>{title}</h1>
        <h3 className={subtitleStyle}>{subtitle}</h3>
        {ctaIcon ? (
          <div className={CTAStyle}>
            <p onClick={() => console.log(`Redirigiendo a ${redirectPage}`)}>
              {callToAction}
            </p>
            <Icon type={ctaIcon} iconStyle={`${ctaIconStyle} w-4 h-4`} />
          </div>
        ) : (
          <p
            className={CTAStyle}
            onClick={() => console.log(`Redirigiendo a ${redirectPage}`)}
          >
            {callToAction}
          </p>
        )}
      </div>
      {mainBoxIcon && <Icon type={mainBoxIcon} iconStyle={mainIconStyle} />}
    </div>
  );
}

CTABox.propTypes = {
  ctaIcon: PropTypes.string,
  mainBoxIcon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  callToAction: PropTypes.string,
  redirectPage: PropTypes.string,
  mainBoxStyle: PropTypes.string,
  titleStyle: PropTypes.string,
  subtitleStyle: PropTypes.string,
  CTAStyle: PropTypes.string,
  iconStyle: PropTypes.string,
};

export default CTABox;
