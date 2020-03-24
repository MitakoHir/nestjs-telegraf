import { Injectable, Type } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  TelegrafActionMetadata,
  TelegrafCashtagMetadata,
  TelegrafCommandMetadata,
  TelegrafEntityMetadata,
  TelegrafHashtagMetadata,
  TelegrafHearsMetadata,
  TelegrafInlineQueryMetadata,
  TelegrafMentionMetadata,
  TelegrafOnMetadata,
  TelegrafPhoneMetadata,
  TelegrafStart,
} from './decorators';
import { DECORATORS } from './telegraf.constants';

@Injectable()
export class TelegrafMetadataAccessor {
  constructor(private readonly reflector: Reflector) {}

  isTelegrafUse(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.USE, target);
  }

  isTelegrafOn(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.ON, target);
  }

  getTelegrafOnMetadata(
    target: Type<any> | Function,
  ): TelegrafOnMetadata | undefined {
    return this.reflector.get(DECORATORS.ON, target);
  }

  isTelegrafHears(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.HEARS, target);
  }

  getTelegrafHearsMetadata(
    target: Type<any> | Function,
  ): TelegrafHearsMetadata | undefined {
    return this.reflector.get(DECORATORS.HEARS, target);
  }

  isTelegrafCommand(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.COMMAND, target);
  }

  getTelegrafCommandMetadata(
    target: Type<any> | Function,
  ): TelegrafCommandMetadata | undefined {
    return this.reflector.get(DECORATORS.COMMAND, target);
  }

  isTelegrafStart(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.START, target);
  }

  isTelegrafHelp(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.HELP, target);
  }

  isTelegrafSettings(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.SETTINGS, target);
  }

  isTelegrafEntity(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.ENTITY, target);
  }

  getTelegrafEntityMetadata(
    target: Type<any> | Function,
  ): TelegrafEntityMetadata | undefined {
    return this.reflector.get(DECORATORS.ENTITY, target);
  }

  isTelegrafMention(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.MENTION, target);
  }

  getTelegrafMentionMetadata(
    target: Type<any> | Function,
  ): TelegrafMentionMetadata | undefined {
    return this.reflector.get(DECORATORS.MENTION, target);
  }

  isTelegrafPhone(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.PHONE, target);
  }

  getTelegrafPhoneMetadata(
    target: Type<any> | Function,
  ): TelegrafPhoneMetadata | undefined {
    return this.reflector.get(DECORATORS.PHONE, target);
  }

  isTelegrafHashtag(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.HASHTAG, target);
  }

  getTelegrafHashtagMetadata(
    target: Type<any> | Function,
  ): TelegrafHashtagMetadata | undefined {
    return this.reflector.get(DECORATORS.HASHTAG, target);
  }

  isTelegrafCashtag(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.CASHTAG, target);
  }

  getTelegrafCashtagMetadata(
    target: Type<any> | Function,
  ): TelegrafCashtagMetadata | undefined {
    return this.reflector.get(DECORATORS.CASHTAG, target);
  }

  isTelegrafAction(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.ACTION, target);
  }

  getTelegrafActionMetadata(
    target: Type<any> | Function,
  ): TelegrafActionMetadata | undefined {
    return this.reflector.get(DECORATORS.ACTION, target);
  }

  isTelegrafInlineQuery(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.INLINE_QUERY, target);
  }

  getTelegrafInlineQueryMetadata(
    target: Type<any> | Function,
  ): TelegrafInlineQueryMetadata | undefined {
    return this.reflector.get(DECORATORS.INLINE_QUERY, target);
  }

  isTelegrafGameQuery(target: Type<any> | Function): boolean {
    if (!target) {
      return false;
    }
    return !!this.reflector.get(DECORATORS.GAME_QUERY, target);
  }
}