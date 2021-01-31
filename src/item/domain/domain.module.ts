import { Global, Module } from '@nestjs/common';
import { ItemRepository } from './repositories';

@Global()
@Module({
    providers: [
        ItemRepository,
    ],
    exports: [
        ItemRepository,
    ]
})
export class DomainModule {}
