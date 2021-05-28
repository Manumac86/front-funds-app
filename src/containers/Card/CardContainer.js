import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card/Card';
import FundInputContainer from '../FundInput/FundInputContainer';

/**
 * Card Container Component
 * @component
 *
 * @param {Array}    funds     The funds array.
 * @param {string}   token     The APIToken to make requests.
 * @param {Function} getFunds  The callback to reload the funds list.
 *
 * @return {JSX}
 */
const CardContainer = ({
  funds,
  token,
  getFunds,
}) => {
  /**
   * The total amount of funds getted.
   *
   * @type {number}
   */
  const [totalAmount, setTotalAmount] = useState(0);
  /**
   * The amount left to reach project goal.
   *
   * @type {number}
   */
  const [amountLeft, setAmountLeft] = useState(0);
  /**
   * The porcentual progress to reach the project goal.
   *
   * @type {number}
   */
  const [progress, setProgress] = useState(0);
  /**
   * The total number of funds getted.
   *
   * @type {number}
   */
  const numberOfFunds = funds.length;
  /**
   * The project total amount goal.
   *
   * @type {number}
   */
  const mountObjective = 10000;
  /**
   * The project time limit to get funds.
   *
   * @type {Date}
   */
  const fundsLimitTime = new Date('12/31/2022');
  /**
   * The total days left to fund the project.
   *
   * @type {number}
   */
  const fundingTimeLeft = Math.floor((fundsLimitTime - new Date()) / (86400000));

  /**
   * Calculates the total amount getted.
   * Set the state for the totalAmount.
   */
  const getTotalAmount = () => {
    let total = 0;
    funds.forEach((fund) => {
      total += fund.amount;
    });
    setTotalAmount(total);
  };

  /**
   * Reload the total amount when funds change.
   */
  useEffect(() => {
    getTotalAmount();
  }, [funds]);

  /**
   * Recalculate the amount left and the new fund progress when the total amount changes.
   */
  useEffect(() => {
    setAmountLeft((mountObjective - totalAmount));
    setProgress((totalAmount * 100) / mountObjective);
  }, [totalAmount]);

  return (
    <div className="cardContainer">
      <Card
        amountLeft={amountLeft}
        fundingTimeLeft={fundingTimeLeft}
        numberOfFunds={numberOfFunds}
        progressValue={progress}
      >
        <FundInputContainer
          token={token}
          getFunds={getFunds}
        />
      </Card>
    </div>
  );
};

/**
 * CardContainer Props Types.
 */
CardContainer.propTypes = {
  funds: PropTypes.arrayOf(PropTypes.object).isRequired,
  token: PropTypes.string.isRequired,
  getFunds: PropTypes.func.isRequired,
};

export default CardContainer;
