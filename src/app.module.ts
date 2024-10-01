import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsermenuModule } from './usermenu/usermenu.module';
import { UsersubmenuModule } from './usersubmenu/usersubmenu.module';
import { FloorsModule } from './floors/floors.module';
import { TablesModule } from './tables/tables.module';
import { OrdersModule } from './orders/orders.module';
import { OrdertypesModule } from './ordertypes/ordertypes.module';
import { StocksModule } from './stocks/stocks.module';
import { StockitemsModule } from './stockitems/stockitems.module';
import { ItemtypesModule } from './itemtypes/itemtypes.module';
import { ItemsModule } from './items/items.module';
import { ServicesModule } from './services/services.module';
import { ExpensesModule } from './expenses/expenses.module';
import { ExpenseitemsModule } from './expenseitems/expenseitems.module';
import { ShopdetailsModule } from './shopdetails/shopdetails.module';
import { CustomersModule } from './customers/customers.module';
import { SalariesModule } from './salaries/salaries.module';
import { UserroleModule } from './userrole/userrole.module';
import { UserrolepermissionsModule } from './userrolepermissions/userrolepermissions.module';
import { StaffModule } from './staff/staff.module';
import { ReportsModule } from './reports/reports.module';
import { ReportfieldsModule } from './reportfields/reportfields.module';
import { UnitsModule } from './units/units.module';
import { BrandsModule } from './brands/brands.module';
import { ExpensecategoriesModule } from './expensecategories/expensecategories.module';
import { Usermenu } from './usermenu/entities/usermenu.entity';
import { Floor } from './floors/entities/floor.entity';
import { Userrole } from './userrole/entities/userrole.entity';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/entities/category.entity';
import { Shopdetail } from './shopdetails/entities/shopdetail.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        synchronize: true,
        entities: [User, Usermenu, Floor, Userrole, Category, Shopdetail],
      }),
    }),
    UserModule,
    AuthModule,
    UsermenuModule,
    UsersubmenuModule,
    FloorsModule,
    TablesModule,
    OrdersModule,
    OrdertypesModule,
    StocksModule,
    StockitemsModule,
    ItemtypesModule,
    ItemsModule,
    ServicesModule,
    ExpensesModule,
    ExpenseitemsModule,
    ShopdetailsModule,
    CustomersModule,
    SalariesModule,
    UserroleModule,
    UserrolepermissionsModule,
    StaffModule,
    ReportsModule,
    ReportfieldsModule,
    UnitsModule,
    BrandsModule,
    ExpensecategoriesModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
