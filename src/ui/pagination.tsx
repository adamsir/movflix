import * as React from "react";
import {
  Pagination as UIPagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  const getHref = (type?: "prev" | "next") => {
    const prefix = "?page";
    let href = `${prefix}=${currentPage}`;

    if (type === "prev") {
      href = `${prefix}=${currentPage > 1 ? currentPage - 1 : 1}`;
    }

    if (type === "next") {
      href = `${prefix}=${
        currentPage < totalPages ? currentPage + 1 : currentPage
      }`;
    }

    return href;
  };
  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          {/* missing disabled for currentPage === 1 */}
          <PaginationPrevious href={getHref("prev")} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={getHref()} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          {/* missing disabled for currentPage === totalPages */}
          <PaginationNext href={getHref("next")} />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
};

export default Pagination;
