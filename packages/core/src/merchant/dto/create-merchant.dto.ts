import { IMerchant } from "@gauzy/contracts";
import { IntersectionType } from "@nestjs/mapped-types";
import { RelationalWarehouseDTO } from "./../../warehouse/dto";
import { RelationalContactDTO } from "./../../contact/dto";
import { RelationalTagDTO } from "./../../tags/dto";
import { MerchantDTO } from "./merchant.dto";

/**
 * Create merchant request DTO validation
 */
export class CreateMerchantDTO extends IntersectionType(
    MerchantDTO,
    RelationalTagDTO,
    RelationalContactDTO,
    RelationalWarehouseDTO
) implements IMerchant {}