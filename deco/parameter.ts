import { BadRequestException } from '@nestjs/common';

function MinLength(min: number) {
  return function (target: any, propertyKey: string, parameterIndex: number) {
    target.validators = {
      minLength: function (args: string[]) {
        return args[parameterIndex].length >= min;
      },
    };
  };
}

function Validate(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const method = descriptor.value;

  descriptor.value = function (...args) {
    Object.keys(target.validators).forEach((key) => {
      if (!target.validators[key](args)) {
        throw new BadRequestException();
      }
    });
    method.apply(this, args);
  };
}

class User {
  private name: string;

  @Validate
  setName(@MinLength(3) name: string) {
    this.name = name;
  }
}

const t = new User();
t.setName('Dexter');
console.log('----------');
t.setName('De');

// > 💡 Nest에서 API 요청 파라미터에 대해 유효성 검사를 할 때 이와 유사한 데코레이터를 많이 사용합니다.
