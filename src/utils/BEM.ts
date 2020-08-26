interface ComposeClass {
  (name: string): BEM;
}

interface BEM {
  /**
   * 基础的className
   */
  c: string;
  /**
   * b - block
   */
  b: ComposeClass;
  /**
   * e - element
   */
  e: ComposeClass;
  /**
   * m - mofifier
   */
  m: ComposeClass;
}

export function createBem(className: string): BEM {
  return {
    c: className,
    b: (block: string) => createBem(`${className}-${block}`),
    e: (element: string) => createBem(`${className}--${element}`),
    m: (modifier: string) => createBem(`${className}__${modifier}`),
  };
}
