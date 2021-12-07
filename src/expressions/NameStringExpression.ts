interface NameStringExpressionProps {
  evaluateString: () => string | null;
  evaluateValue: () => string | number | null;
}

class NameStringExpression implements NameStringExpressionProps {
  constructor() {}

  public evaluateString() {
    return null;
  }

  public evaluateValue() {
    return null;
  }
}

export default NameStringExpression;
