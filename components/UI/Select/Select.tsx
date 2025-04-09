'use client';
import React from "react";
import Select, {
  GroupBase,
  Props as SelectProps,
  OptionsOrGroups,
} from "react-select";

export type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: OptionsOrGroups<Option, GroupBase<Option>>;
  isLoading?: boolean;
  onMenuScrollToBottom?: () => void;
} & Partial<SelectProps<Option, false, GroupBase<Option>>>;

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  isLoading = false,
  onMenuScrollToBottom,
  ...rest
}) => {
  return (
    <Select
      options={options.length ? options : []}
      isLoading={isLoading}
      onMenuScrollToBottom={onMenuScrollToBottom}
      className="m-4 !max-w-[629px] !rounded-md bg-white !outline-none"
      {...rest}
    />
  );
};

export default CustomSelect;
