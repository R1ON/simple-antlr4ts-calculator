import NameStringExpression from './NameStringExpression';

class AddExpression extends NameStringExpression {
  public left: NameStringExpression;
  public right: NameStringExpression;

  constructor(left: NameStringExpression, right: NameStringExpression) {
    super();

    if (
      !(left instanceof NameStringExpression || right instanceof NameStringExpression)
    ) {
      throw new Error(`
        AddExpression -> 'left' или 'right' не являются инстансами класса NameStringExpression
        Left = ${left}.
        Right = ${right}.
      `);
    }

    this.left = left;
    this.right = right;
  }

  public evaluateString() {
    return this.evaluateValue().toString();
  }

  public evaluateValue() {
    const left = this.left.evaluateValue();
    const right = this.right.evaluateValue();

    if (typeof left === 'string' && typeof right === 'number') {
      return left + right.toString();
    }

    if (typeof left === 'number' && typeof right === 'string') {
      return left.toString() + right;
    }

    return (left as number) + (right as number);
  }
}

export default AddExpression;
