"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TQuranLCBasic } from "@/types/quran-lc-basic.type";
import { Briefcase, Calendar, Info, MapPin, Phone, User2 } from "lucide-react";

const StudentDetailsModal = ({ student }: { student: TQuranLCBasic }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Info className="h-5 w-5 font-bold cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="w-full !max-w-4xl h-[80%] overflow-auto bg-white border-none">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl">
            Student Details
          </DialogTitle>
          <DialogDescription>
            Detailed student information including contact details, profession,
            and batch etc.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          <Card>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <User2 className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {student.userName}
                    </p>
                    <p className="text-sm text-muted-foreground capitalize">
                      {student.userGender}
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Email</p>
                    <p className="text-sm text-muted-foreground">
                      {student.userEmail}
                    </p>
                  </div>
                </div> */}
                <div className="flex items-start gap-4">
                  <Calendar className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Date of Birth
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(student.dateOfBirth).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Briefcase className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Profession
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {student.profession}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-primary text-white">
                    {student.batch}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`${
                      student.status === "completed" &&
                      "bg-green-500 hover:bg-green-500 text-white"
                    } ${
                      student.status === "waiting" &&
                      "bg-red-400 hover:bg-red-500 text-white"
                    } capitalize`}
                  >
                    {student.status}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-0">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Address</p>
                    <p className="text-sm text-muted-foreground">
                      {student.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 mt-1" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Contact Numbers
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Phone: {student.phoneNumber}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp: {student.whatsAppNumber}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-base font-semibold">Payment Details</p>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground capitalize">
                        Method:{" "}
                        <span className="text-gray-700 uppercase">
                          {student.paymentMethod}
                        </span>
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Pay Digits:{" "}
                        <span className="text-gray-700">
                          {student.RegFeeNumber}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default StudentDetailsModal;
